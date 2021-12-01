const express = require('express')
const router = express.Router();
const { param, query, body } = require('express-validator');
const controller = require('../controller/controller')
const utils = require('../utils/utils')

router.post(
    '/create-event',
    [
        utils.bodyNotEmpty('event_name')
            .matches(/^[A-Za-z ]+$/)
            .withMessage('event_name must be string'),
        utils.bodyNotEmpty('event_desc'),
        utils.ValidateDateFormat('event_start_date'),
        utils.ValidateDateFormat('event_end_date'),
        utils.bodyNotEmpty('event_org'),
    ],
    controller.createEvent
);

module.exports = router;