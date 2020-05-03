var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ExamSchema = new Schema({
    exam_name: String,
    team: String,
    questions:[
        {
            qustion: String,
            answers:[
                {
                    answer: String, 
                    right: Boolean
                }             
            ]
        }
    ]}
);

module.exports = mongoose.model('Exams', ExamSchema);