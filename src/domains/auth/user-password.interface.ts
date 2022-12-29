export interface UserPassword {
  comparePassword(password1: string, password2: string): boolean;
  createHash(password: string): string;
}
