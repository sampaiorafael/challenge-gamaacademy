import { EntityRepository, Repository, getRepository} from 'typeorm';

import { QuestionChoicesEntity } from '../entities/QuestionsChoices.entity'
import { createQuestionChoiceInput } from '../types/test.types'

@EntityRepository(QuestionChoicesEntity)
class QuestionChoicesRepository extends Repository<QuestionChoicesEntity> {

    public async newQuestionChoice(data: createQuestionChoiceInput) {
        try {
            return await getRepository(QuestionChoicesEntity).save(data)
        } catch (err) {
            throw err.message
        }
    }

}

export default new QuestionChoicesRepository()