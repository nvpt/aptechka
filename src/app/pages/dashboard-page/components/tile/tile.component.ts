import {Input, Component, OnInit, EventEmitter, Output} from '@angular/core';

import {BoxI} from '../../../../interfaces/box-interface';
import {MedicamentI} from '../../../../interfaces/medicament-interface';
import {SettingsService} from '../../../../services/settings.service';
import {medicamentsMock} from '../../../medicaments-page/medicaments.mock';

@Component({
    selector: 'app-tile',
    templateUrl: './tile.component.html',
    styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {
    @Input() box?: BoxI;
    @Output() onDelete: EventEmitter<BoxI> = new EventEmitter<BoxI>();
    onTheVerge: number = 0;
    overdue: number = 0;
    currentDate: Date = new Date();
    boxMedicaments: MedicamentI[] = [];

    constructor(public settingsService: SettingsService) {
    }

    ngOnInit(): void {
        this.defineMedicaments();
        this.calculateCounters();
    }


    defineMedicaments() {
        this.boxMedicaments = medicamentsMock.filter(medicament => (
            this.box.medicamentsId.includes(medicament.id)
        ));
    }

    calculateCounters() {
        if (this.boxMedicaments.length) {
            this.boxMedicaments.forEach(medicament => {
                const difference = new Date(medicament.expiryDate).getTime() - this.currentDate.getTime();
                const warningIntervalInMs: number = this.settingsService.warningInterval * 1000 * 60 * 60 * 24;

                if (difference < 0) {
                    this.overdue += 1;
                } else if (difference < warningIntervalInMs) {
                    this.onTheVerge += 1;
                }
            });
        }
    }

    deleteBox(box: BoxI): void {
        this.onDelete.emit(box);
    }

}
