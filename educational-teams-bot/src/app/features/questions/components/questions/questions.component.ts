import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Pagination } from 'src/app/shared/classes/pagination';
import { Question } from 'src/app/shared/classes/question';
import { QuestionsService } from '../../services/questions.service';
import { addQuestions } from '../../state/questions.actions';
import { QuestionsState } from '../../state/questions.reducer';
import { selectQuestions } from '../../state/questions.selector';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {
  /**
   * Questions to display.
   */
  questions: Question[] = [];

  /**
   * Initializes a new instance of the QuestionComponent class.
   * @param service Question service to use in this component.
   */
  constructor(
    private service: QuestionsService,
    private store: Store<QuestionsState>
  ) {
    this.store.pipe(select(selectQuestions)).subscribe((q: Question[]) => {
      this.questions = q;
    });
  }

  /**
   * Trigger actions on component initialization.
   */
  ngOnInit(): void {
    this.getQuestions();
  }

  /**
   * Get the questions thanks to the service.
   */
  getQuestions() {
    this.service.getQuestions().subscribe((result: any) => {
      let pagination = new Pagination(
        result.items,
        result.pageIndex,
        result.totalPages,
        result.totalCount,
        result.hasPreviousPage,
        result.hasNextPage
      );

      let questions: Question[] = [];

      pagination.items.forEach((element) => {
        questions.push(
          new Question(
            element.id,
            element.content,
            element.tags,
            element.answers
          )
        );
      });

      this.store.dispatch(addQuestions(questions));
    });
  }
}
