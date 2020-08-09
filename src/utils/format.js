const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Terça-feira",
    "Segunda-feira",
    "Quinta-feira",
    "Quarta-feira",
    "Sábado",
    "Sexta-feira",
]

function getSubject(subjectNumber) {
    const position = +subjectNumber - 1
    return subjects[position]
}

function convertHoursToMinutes(time) {
    const [hour, minute] = time.split(":")
    return Number((hour * 60) + minutes)
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}