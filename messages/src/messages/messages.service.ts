import { Injectable } from "@nestjs/common";
import { MessagesRepository } from "./messages.repository";

@Injectable()
export class MessagesService {
  constructor(public messagesRepo: MessagesRepository) {}

  async findOne(id: string) {
    return await this.messagesRepo.findOne(id)
  }

  async findAll() {
    return await this.messagesRepo.findAll()
  }

  async create(content: string) {
    await this.messagesRepo.create(content);
  }
}