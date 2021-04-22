import {
  Component,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import Quagga from '@ericblade/quagga2'; // ES6

type Diaper = {
  size: number;
  type: string;
  brand: string;
};

enum DiaperSize {
  NEW_BORN,
  ONE,
  TWO,
  THREE,
  FOUR,
  FIVE,
  SIX,
  SEVEN,
  ADULT,
}

enum DiaperType {
  REGULAR,
  OVER_NIGHT,
  PULL_UPS,
  SWIMMING,
}

enum RolesActions {
  DISTRIBUTE,
  ADD,
  RECONCILE,
}

type RoleName = {
  DISTRIBUTOR: [RolesActions.DISTRIBUTE];
  COORDINATOR: [RolesActions.DISTRIBUTE, RolesActions.ADD];
  ADMIN: [RolesActions.DISTRIBUTE, RolesActions.ADD, RolesActions.RECONCILE];
};

@Component({
  selector: 'app-inventory-home',
  templateUrl: './inventory-home.component.html',
  styleUrls: ['./inventory-home.component.scss'],
})
export class InventoryHomeComponent implements OnChanges {
  scanSection = false;
  errorMessage: string;
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  inventoryChange(showHide: boolean): void {
    if (showHide && !this.scanSection) {
      this.scanSection = showHide;
    }

    if (showHide) {
      setTimeout(this.activateScanner, 500);
    }

    if (!showHide) {
      Quagga.stop();
      this.scanSection = showHide;
    }
  }

  private activateScanner(): void {
    Quagga.stop();
    Quagga.init(
      {
        inputStream: {
          constraints: {

            facingMode: 'environment', // restrict camera type
          },
          area: {
            // defines rectangle of the detection
            top: '40%', // top offset
            right: '20%', // right offset
            left: '20%', // left offset
            bottom: '40%', // bottom offset
          },
        },
        decoder: {
          readers: ['upc_reader'], // restrict code types
        },
      },
      (err) => {
        if (err) {
          this.errorMessage = `QuaggaJS could not be initialized, err: ${err}`;
        } else {
          Quagga.start();
          Quagga.onDetected((res) => {
            console.log(res.codeResult.code);
          });
        }
      }
    );
  }
}
