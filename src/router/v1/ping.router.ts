import express from 'express';
import { pingHandler } from '../../controllers/ping.controllers';
import validateRequestBody from '../../validator';
import { pingSchema } from '../../validator/ping.validator';
const pingRouter=express.Router();

pingRouter.get('/:id/comments', validateRequestBody(pingSchema),pingHandler);

export default pingRouter;