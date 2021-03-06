import { EntityRepository, Repository, getRepository} from 'typeorm';

import { QuestionChoicesEntity } from '../entities/QuestionsChoices.entity'
import { createQuestionChoiceInputs } from '../types/test.types'

@EntityRepository(QuestionChoicesEntity)
class QuestionChoicesRepository extends Repository<QuestionChoicesEntity> {

    public async createQuestionChoice(data: createQuestionChoiceInputs): Promise<QuestionChoicesEntity> {
        try {
            return await getRepository(QuestionChoicesEntity).save(data)
        } catch (err) {
            throw err.message
        }
    }

}

export default new QuestionChoicesRepository()
