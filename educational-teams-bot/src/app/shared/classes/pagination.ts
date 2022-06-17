import { Answer } from './answer';
import { Question } from './question';
import { Reaction } from './reaction';
import { Speaker } from './speaker';
import { Tag } from './tag';

export class Pagination {
  items: any[];
  pageIndex: number;
  totalPages: number;
  totalCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;

  /**
   * Initializes a new instance of the Pagination class.
   */
  constructor(
    items: any[],
    pageIndex: number,
    totalPages: number,
    totalCount: number,
    hasPreviousPage: boolean,
    hasNextPage: boolean
  ) {
    this.items = items;
    this.pageIndex = pageIndex;
    this.totalPages = totalPages;
    this.totalCount = totalCount;
    this.hasPreviousPage = hasPreviousPage;
    this.hasNextPage = hasNextPage;
  }
}
