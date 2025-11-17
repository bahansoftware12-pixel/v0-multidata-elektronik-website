const mysql = require('mysql2/promise')

async function initDb() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
  })

  try {
    // Create database
    await connection.execute(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME || 'multidata_db'}`)
    console.log('Database created/exists')

    // Select database
    await connection.execute(`USE ${process.env.DB_NAME || 'multidata_db'}`)

    // Read and execute SQL file
    const fs = require('fs')
    const sql = fs.readFileSync('./scripts/init-db.sql', 'utf8')
    
    // Split and execute each statement
    const statements = sql.split(';').filter(stmt => stmt.trim())
    for (const statement of statements) {
      if (statement.trim()) {
        await connection.execute(statement)
      }
    }

    console.log('✓ Database tables created successfully')
    await connection.end()
  } catch (error) {
    console.error('Database initialization error:', error)
    process.exit(1)
  }
}

initDb()
