from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://s103796085:151202@feenix-mariadb-web.swin.edu.au:3306/s103796085_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Define SQLAlchemy ORM models


class User(db.Model):
    UserID = db.Column(db.Integer, primary_key=True)
    Username = db.Column(db.String(255), nullable=False)
    Password = db.Column(db.String(64), nullable=False)


class AuditReport(db.Model):
    ReportID = db.Column(db.Integer, primary_key=True)
    UserID = db.Column(db.Integer, db.ForeignKey(
        'user.UserID'), nullable=False)
    Timestamp = db.Column(db.DateTime, nullable=False)
    TotalVulnerabilities = db.Column(db.Integer, nullable=False)
    SecurityRating = db.Column(db.Float, nullable=True)


class Vulnerability(db.Model):
    VulnerabilityID = db.Column(db.Integer, primary_key=True)
    ReportID = db.Column(db.Integer, db.ForeignKey(
        'audit_report.ReportID'), nullable=False)
    Category = db.Column(db.String(255), nullable=False)
    Findings = db.Column(db.Integer, nullable=False)
    Recommendations = db.Column(db.Text, nullable=True)


class PreviousReport(db.Model):
    AuditID = db.Column(db.Integer, primary_key=True)
    ReportID = db.Column(db.Integer, db.ForeignKey(
        'audit_report.ReportID'), nullable=False)
    ContractName = db.Column(db.String(255), nullable=False)
    AuditDate = db.Column(db.Date, nullable=False)
    Status = db.Column(
        db.Enum('Complete', 'In Progress', 'Failed'), nullable=False)
    VulnerabilitiesLink = db.Column(db.String(255), nullable=False)
    AuditReportLink = db.Column(db.String(255), nullable=False)


@app.route('./components/ResultPage/', methods=['GET'])
def get_items():
    

    return jsonify([])  # Placeholder return


@app.route('./components/ResultPage/', methods=['GET'])
def get_users():
    users = User.query.all()
    return jsonify([u.Username for u in users])


if __name__ == '__main__':
    app.run(debug=True)
