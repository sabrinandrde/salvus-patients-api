const express = require('express');
const app = express();
app.use(express.json());
const patients = []; 

app.route('/api/patients')
    .get((req, res) => {
        return res.json(patients);
    })
    .post((req, res) => {
        const { name, phone, disease } = req.body;
        patients.push({
            name: name,
            phone: phone,
            diesease: disease
        });  
        return res.json(patients);
    });

app.route('/api/patients/:id')
    .get((req, res) => {
        const {id} = req.params;
        return res.json(patients[id]);
    })
    .put((req, res) => {
        const {id} = req.params;
        const { name, phone, disease } = req.body;
        patients[id] = {
            name: name,
            phone: phone,
            diesease: disease
        };
        return res.json(patients);
    })
    .delete((req, res) => {
        const {id} = req.params;
        patients.splice(id, 1); 
        return res.send();    
    });

app.listen(3000); 
