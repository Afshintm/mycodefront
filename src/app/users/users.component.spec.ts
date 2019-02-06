import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {UsersComponent} from './users.component';
import {UsersService} from './users.service';
import {of} from 'rxjs';

const MockUsersService = {
  getUsers: () => of()
};

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let usersService: UsersService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsersComponent],
      providers: [
        {
          provide: UsersService, useValue: MockUsersService
        },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    usersService = fixture.debugElement.injector.get(UsersService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('fetch list of users', () => {

    spyOn(usersService, 'getUsers').and.returnValue(of([
      {
        id: 1,
        firstName: 'some',
        lastName: 'user'
      },
      {
        id: 2,
        firstName: 'another',
        lastName: 'user'
      }
    ]));

    component.ngOnInit();

    expect(component.users).toEqual([
      {
        id: 1,
        firstName: 'some',
        lastName: 'user'
      },
      {
        id: 2,
        firstName: 'another',
        lastName: 'user'
      }
    ]);

    fixture.detectChanges();

    const list = document.getElementById('users-list');
    expect(list.innerText).toContain('some user');
    expect(list.innerText).toContain('another user');

  });


});
