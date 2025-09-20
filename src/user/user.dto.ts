import { ApiProperty } from "@nestjs/swagger";

export default class UserDTO {
    @ApiProperty()
    email: string

    @ApiProperty()
    password: string

    @ApiProperty()
    name: string
}