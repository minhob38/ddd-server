import { Calendar } from 'src/domains/common/calendar.interface';

export class CalendarImpl implements Calendar {
  checkThreeMonthPassed(date: Date): boolean {
    return true;
  }
}
