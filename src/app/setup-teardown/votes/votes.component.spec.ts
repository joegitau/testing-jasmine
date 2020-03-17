// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotesComponent } from './votes.component';

describe('VotesComponent', () => {
  let component: VotesComponent;

  beforeEach(() => {
    // arrange
    component = new VotesComponent();
  });

  it('should increment totalVotes when upVoted', () => {
    // act
    component.upVote();

    // assert
    expect(component.totalVotes).toBe(1);
  });

  it('should decrement totalVotes when downVoted', () => {
    component.downVote();
    expect(component.totalVotes).toBe(-1);
  })
});



// describe('VotesComponent', () => {
//   let component: VotesComponent;
//   let fixture: ComponentFixture<VotesComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ VotesComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(VotesComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
