import container from '../../di/inversify.config';
import { Router } from 'express';
import AuthController from './auth.controller';
import RequestValidator from '../../common/validation';
import { SignInDto, SignUpDto } from './auth.dto';
import { protect } from '../../common/auth';
import 'express-async-errors';

export const router = Router();
const authController = container.resolve<AuthController>(AuthController);

router.post('/sign-up', RequestValidator.validate(SignUpDto), authController.signUp);
router.post('/sign-in', RequestValidator.validate(SignInDto), authController.signIn);
router.get('/dashboard', protect, authController.dashboard);
