import sqlite3

conn = sqlite3.connect('airline.db')
c = conn.cursor()

# c.execute("""
#         CREATE TABLE Airports (
#         airport_id INTEGER PRIMARY KEY,
#         airport_code TEXT NOT NULL,
#         airport_name TEXT NOT NULL,
#         city TEXT NOT NULL,
#         country TEXT NOT NULL
#         -- Other airport details here
#     )""")

# c.execute("""
#     INSERT INTO Airports (airport_id, airport_code, airport_name, city, country) VALUES (123, 'BNC', 'Baneacnca', 'Karachi', 'Pakistan');
#     """)

c.execute("SELECT * FROM Airports")
print(c.fetchall())


conn.commit()
conn.close()