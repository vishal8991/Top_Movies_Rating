import { TestBed } from '@angular/core/testing';

import { InMemoryCommentService } from './in-memory-comment.service';

describe('InMemoryCommentService', () => {
  let service: InMemoryCommentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemoryCommentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
