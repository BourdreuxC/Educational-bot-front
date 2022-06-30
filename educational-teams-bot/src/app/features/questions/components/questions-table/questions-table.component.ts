import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { Pagination } from 'src/app/shared/classes/pagination';
import { Question } from 'src/app/shared/classes/question';
import { TagListComponent } from 'src/app/shared/components/tag-list/tag-list.component';
import { QuestionsService } from '../../services/questions.service';
import { addQuestions } from '../../state/questions.actions';
import { QuestionsState } from '../../state/questions.reducer';
import { selectQuestions } from '../../state/questions.selector';

@Component({
  selector: 'app-questions-table',
  templateUrl: './questions-table.component.html',
  styleUrls: ['./questions-table.component.scss'],
})
export class QuestionsTableComponent implements OnInit {
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
    private store: Store<QuestionsState>,
    private dialog: MatDialog
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
   * Display a modal of the list.
   */
  listModal(tagList: any[]) {
    this.dialog.open(TagListComponent, {
      data: { tagList: tagList },
    });
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
            element.answers,
            element.bestAnswer
          )
        );
      });

      this.store.dispatch(addQuestions(questions));
    });
  }
}
