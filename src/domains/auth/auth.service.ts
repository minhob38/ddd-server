import { BadRequestException, Injectable } from '@nestjs/common';
import { UserCreateImpl } from 'src/infrastructures/auth/user-create-impl.';
import { UserReadImpl } from 'src/infrastructures/auth/user-read-impl.';
import { UserCreate } from './user-create.interface';
import { UserRead } from './user-read.interface';
import { UserCommand } from './user.command';
import { UserInfo } from './user.info';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRead: UserReadImpl,
    private readonly userCreate: UserCreateImpl,
  ) {}

  async createUser(userCommand: UserCommand): Promise<UserInfo> {
    // 1. 회원조회
    let user = await this.userRead.findByEmail(userCommand.getEmail());
    if (user) throw new BadRequestException('이미 회원가입이 되어 있습니다.');

    // 2. 회원저장
    const userEntity = userCommand.toEntity();
    user = await this.userCreate.save(userEntity);

    // 3. 회원정보 반환
    return user;
  }
}
