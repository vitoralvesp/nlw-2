const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    proffyValue = {
        name: 'Mayk Brito',
        avatar: 'https://avatars2.githubusercontent.com/u/6643122?s=400&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4',
        whatsapp: '985643920',
        bio: 'Instrutor de Educação Física',
    }

    classValue = {
        subject: 1,
        cost: '50',        
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 5220
        }
    ]

    await createProffy(db, {proffyValue, classValue, classScheduleValues})

    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;  
    `)
    console.log(selectedClassesAndProffys)

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND Class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"
    `)
})