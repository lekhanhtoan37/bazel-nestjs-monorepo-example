import { AuthService } from '@app/auth/auth.service'
import { Injectable } from '@nestjs/common'

@Injectable()
export class ApiService {
  constructor(private readonly authService: AuthService) {}
  getHello(): string {
    return 'Hello World!';
  }

  getHelloFromAuth(): string {
    return this.authService.getHello();
  }
}
