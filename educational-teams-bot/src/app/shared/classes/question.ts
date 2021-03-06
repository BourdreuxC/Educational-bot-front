import { Answer } from './answer';
import { Tag } from './tag';

/**
 * Question class.
 */
export class Question {
  /**
   * Question identifier.
   */
  id: string;

  /**
   * Question content.
   */
  content: string;

  /**
   * Question tags.
   */
  tags: Array<Tag>;

  /**
   * Question answers.
   */
  answers: Array<Answer>;

  /**
   * Question best answer.
   */
  bestAnswer: Answer;

  /**
   * Initializes a new instance of the Question class.
   * @param id Question identifier.
   * @param content Question content.
   * @param tags Question tags.
   * @param answers Question answers.
   * @param bestAnswer Question best answer.
   */
  constructor(
    id: string,
    content: string,
    tags: Array<Tag>,
    answers: Array<Answer>,
    bestAnswer: Answer
  ) {
    this.id = id;
    this.content = content;
    this.tags = tags;
    this.answers = answers;
    this.bestAnswer = bestAnswer;
  }
}
