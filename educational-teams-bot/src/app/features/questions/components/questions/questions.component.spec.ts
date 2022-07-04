import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Observable } from 'rxjs';
import { Answer } from 'src/app/shared/classes/answer';
import { Pagination } from 'src/app/shared/classes/pagination';
import { Question } from 'src/app/shared/classes/question';
import { QuestionsService } from '../../services/questions.service';
import {
  questionsReducer,
  QuestionsState,
} from '../../state/questions.reducer';

import { QuestionsComponent } from './questions.component';

class MockQuestionsService extends QuestionsService {
  pagination: Pagination;
  questions: Question[] = [
    new Question(
      '1',
      'This is a question destinated to the bot.',
      [],
      [],
      new Answer('2', 'NON', '1', [], false)
    ),
    new Question(
      '2',
      'This is another question.',
      [],
      [],
      new Answer('1', 'Oui', '1', [], true)
    ),
  ];

  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.pagination = new Pagination(this.questions, 1, 2, 2, false, false);
  }

  override getQuestions(): Observable<Pagination> {
    return new Observable<Pagination>((observer) => {
      observer.next(this.pagination);
    });
  }
}

describe('QuestionsComponent', async () => {
  let component: QuestionsComponent;
  let fixture: ComponentFixture<QuestionsComponent>;
  let expected: Question;
  let service: MockQuestionsService;
  let store: MockStore<QuestionsState>;
  let initialState = { questions: [] };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        StoreModule.forRoot({ questions: questionsReducer }),
      ],
      providers: [provideMockStore({ initialState })],
      declarations: [QuestionsComponent],
    }).compileComponents();

    expected = new Question(
      '1',
      'This is a question destinated to the bot.',
      [],
      [],
      new Answer('1', 'Oui', '1', [], true)
    );
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsComponent);
    component = new QuestionsComponent();
    fixture.detectChanges();
  });

  it('should have questions', () => {
    expect(component).toContain(expected);
  });
});
