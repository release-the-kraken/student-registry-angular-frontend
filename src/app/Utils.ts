import {MatSnackBar } from "@angular/material/snack-bar";
import {Injectable} from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export default class Utils{

  constructor(private snackBar: MatSnackBar) {
  }
  public getSnackBar(message: string): void{
    this.snackBar.open(message,
      undefined,
      {
        verticalPosition: 'top',
        horizontalPosition: 'center',
        duration: 4000
      })
  }
}
