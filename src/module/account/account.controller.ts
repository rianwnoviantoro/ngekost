import { Body, Controller, Get, Post } from '@nestjs/common';
import { AccountService } from './account.service';
import { LoginRequest, RegisterRequest } from './register.request';

@Controller('account')
export class AccountController {
    constructor(
        private readonly accountService: AccountService
    ) { }

    @Get()
    async getAllAccount() {
        const result = await this.accountService.findAll()
        
        return { statusCode: 200, message: 'Success.', data: result }
    }

    @Post('/register')
    async register(@Body() body: RegisterRequest) {
        const result = await this.accountService.register(body)

        return { statusCode: 200, message: 'Success.', data: result }
    }

    @Post('/login')
    async login(@Body() body: LoginRequest) {
        const result = await this.accountService.login(body)

        return { statusCode: 200, message: 'Success.', data: result }
    }
}
