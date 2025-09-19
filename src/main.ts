import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});
  //Set Swagger on the application
  const config = new DocumentBuilder()
    .setTitle('Fisrt API exemple')
    .setDescription('The API description')
    .setVersion('1.0')
    .addTag('testing')
    .build()

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  // 'docs' your endpoint
  SwaggerModule.setup('docs',app, documentFactory);

  await app.listen(process.env.PORT ?? 3333);
}
bootstrap();
