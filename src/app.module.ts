import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from "./file/file.module";
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';
import {ConfigModule} from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    MongooseModule.forRoot(
      `mongodb+srv://musicApp:${process.env.DATABASE_PASSWORD}.qkq4ien.mongodb.net/?retryWrites=true&w=majority`,
    ),
    TrackModule,
    FileModule
  ],
})
export class AppModule {}
