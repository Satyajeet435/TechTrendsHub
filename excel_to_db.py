import pandas as pd
import mysql.connector

# === Load Excel ===
df = pd.read_excel('mobiles.xlsx')  # Update with your Excel filename
df.columns = df.columns.str.strip()  # Clean up any leading/trailing spaces in column names
df = df.where(pd.notnull(df), None)  # Replace NaN with None for MySQL compatibility

# Optional debug step
print("Column names:", df.columns.tolist())

# === Connect to MySQL ===
conn = mysql.connector.connect(
    host='localhost',
    user='root',
    password='ROOT',  # Update your MySQL password
    database='mobile_specs_db'
)
cursor = conn.cursor()

# === Insert each row ===
def safe_str(value, limit=255):
    return str(value)[:limit] if value is not None else ''

for _, row in df.iterrows():
    cursor.execute("""
        INSERT INTO mobile_specs (Spec, Phone1, Phone2, Phone3, Phone4)
        VALUES (%s, %s, %s, %s, %s)
    """, (
        safe_str(row.get('Spec')),
        safe_str(row.get('Phone1')),
        safe_str(row.get('Phone2')),
        safe_str(row.get('Phone3')),
        safe_str(row.get('Phone4'))
    ))

# === Finalize ===
conn.commit()
cursor.close()
conn.close()

print("✅ Excel data successfully inserted into 'mobile_specs' table.")
