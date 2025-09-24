import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDTO {
    @ApiProperty()
    username: string;
    @ApiProperty()
    email: string;
    @ApiProperty()
    password: string;
}

export class LoginUserDTO{
    @ApiProperty()
    email: string;
    @ApiProperty()
    password: string;
}