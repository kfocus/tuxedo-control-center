/*!
 * Copyright (c) 2019 TUXEDO Computers GmbH <tux@tuxedocomputers.com>
 *
 * This file is part of TUXEDO Control Center.
 *
 * TUXEDO Control Center is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * TUXEDO Control Center is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with TUXEDO Control Center.  If not, see <https://www.gnu.org/licenses/>.
 */
export interface ITccFanProfile {
    name: string;
    table: ITccFanTableEntry[];
}

export interface ITccFanTableEntry {
    temp: number;
    speed: number;
}

export const defaultFanProfiles = [
    {
        name: 'Silent',
        table: [
            { temp: 0, speed: 0 },
            { temp: 1, speed: 0 },
            { temp: 2, speed: 0 },
            { temp: 3, speed: 0 },
            { temp: 4, speed: 0 },
            { temp: 5, speed: 0 },
            { temp: 6, speed: 0 },
            { temp: 7, speed: 0 },
            { temp: 8, speed: 0 },
            { temp: 9, speed: 0 },
            { temp: 10, speed: 0 },
            { temp: 11, speed: 0 },
            { temp: 12, speed: 0 },
            { temp: 13, speed: 0 },
            { temp: 14, speed: 0 },
            { temp: 15, speed: 0 },
            { temp: 16, speed: 0 },
            { temp: 17, speed: 0 },
            { temp: 18, speed: 0 },
            { temp: 19, speed: 0 },
            { temp: 20, speed: 0 },
            { temp: 21, speed: 0 },
            { temp: 22, speed: 0 },
            { temp: 23, speed: 0 },
            { temp: 24, speed: 0 },
            { temp: 25, speed: 0 },
            { temp: 26, speed: 0 },
            { temp: 27, speed: 0 },
            { temp: 28, speed: 0 },
            { temp: 29, speed: 0 },
            { temp: 30, speed: 0 },
            { temp: 31, speed: 0 },
            { temp: 32, speed: 0 },
            { temp: 33, speed: 0 },
            { temp: 34, speed: 0 },
            { temp: 35, speed: 0 },
            { temp: 36, speed: 0 },
            { temp: 37, speed: 0 },
            { temp: 38, speed: 0 },
            { temp: 39, speed: 0 },
            { temp: 40, speed: 0 },
            { temp: 41, speed: 0 },
            { temp: 42, speed: 0 },
            { temp: 43, speed: 0 },
            { temp: 44, speed: 0 },
            { temp: 45, speed: 0 },
            { temp: 46, speed: 0 },
            { temp: 47, speed: 0 },
            { temp: 48, speed: 0 },
            { temp: 49, speed: 0 },
            { temp: 50, speed: 0 },
            { temp: 51, speed: 0 },
            { temp: 52, speed: 0 },
            { temp: 53, speed: 0 },
            { temp: 54, speed: 0 },
            { temp: 55, speed: 0 },
            { temp: 56, speed: 0 },
            { temp: 57, speed: 0 },
            { temp: 58, speed: 0 },
            { temp: 59, speed: 0 },
            { temp: 60, speed: 0 },
            { temp: 61, speed: 15 },
            { temp: 62, speed: 15 },
            { temp: 63, speed: 15 },
            { temp: 64, speed: 20 },
            { temp: 65, speed: 20 },
            { temp: 66, speed: 25 },
            { temp: 67, speed: 25 },
            { temp: 68, speed: 25 },
            { temp: 69, speed: 25 },
            { temp: 70, speed: 30 },
            { temp: 71, speed: 30 },
            { temp: 72, speed: 35 },
            { temp: 73, speed: 35 },
            { temp: 74, speed: 40 },
            { temp: 75, speed: 40 },
            { temp: 76, speed: 45 },
            { temp: 77, speed: 45 },
            { temp: 78, speed: 50 },
            { temp: 79, speed: 50 },
            { temp: 80, speed: 55 },
            { temp: 81, speed: 55 },
            { temp: 82, speed: 60 },
            { temp: 83, speed: 60 },
            { temp: 84, speed: 65 },
            { temp: 85, speed: 65 },
            { temp: 86, speed: 70 },
            { temp: 87, speed: 70 },
            { temp: 88, speed: 75 },
            { temp: 89, speed: 80 },
            { temp: 90, speed: 85 },
            { temp: 91, speed: 90 },
            { temp: 92, speed: 90 },
            { temp: 93, speed: 95 },
            { temp: 94, speed: 95 },
            { temp: 95, speed: 100 },
            { temp: 96, speed: 100 },
            { temp: 97, speed: 100 },
            { temp: 98, speed: 100 },
            { temp: 99, speed: 100 },
            { temp: 100, speed: 100 }
        ]
    },
    {
        name: 'Quiet',
        table: [
            { temp: 0, speed: 0 },
            { temp: 1, speed: 0 },
            { temp: 2, speed: 0 },
            { temp: 3, speed: 0 },
            { temp: 4, speed: 0 },
            { temp: 5, speed: 0 },
            { temp: 6, speed: 0 },
            { temp: 7, speed: 0 },
            { temp: 8, speed: 0 },
            { temp: 9, speed: 0 },
            { temp: 10, speed: 0 },
            { temp: 11, speed: 0 },
            { temp: 12, speed: 0 },
            { temp: 13, speed: 0 },
            { temp: 14, speed: 0 },
            { temp: 15, speed: 0 },
            { temp: 16, speed: 0 },
            { temp: 17, speed: 0 },
            { temp: 18, speed: 0 },
            { temp: 19, speed: 0 },
            { temp: 20, speed: 0 },
            { temp: 21, speed: 0 },
            { temp: 22, speed: 0 },
            { temp: 23, speed: 0 },
            { temp: 24, speed: 0 },
            { temp: 25, speed: 0 },
            { temp: 26, speed: 0 },
            { temp: 27, speed: 0 },
            { temp: 28, speed: 0 },
            { temp: 29, speed: 0 },
            { temp: 30, speed: 0 },
            { temp: 31, speed: 0 },
            { temp: 32, speed: 0 },
            { temp: 33, speed: 0 },
            { temp: 34, speed: 0 },
            { temp: 35, speed: 0 },
            { temp: 36, speed: 0 },
            { temp: 37, speed: 0 },
            { temp: 38, speed: 0 },
            { temp: 39, speed: 0 },
            { temp: 40, speed: 0 },
            { temp: 41, speed: 0 },
            { temp: 42, speed: 0 },
            { temp: 43, speed: 0 },
            { temp: 44, speed: 0 },
            { temp: 45, speed: 0 },
            { temp: 46, speed: 0 },
            { temp: 47, speed: 0 },
            { temp: 48, speed: 0 },
            { temp: 49, speed: 0 },
            { temp: 50, speed: 0 },
            { temp: 51, speed: 10 },
            { temp: 52, speed: 11 },
            { temp: 53, speed: 12 },
            { temp: 54, speed: 12 },
            { temp: 55, speed: 12 },
            { temp: 56, speed: 12 },
            { temp: 57, speed: 17 },
            { temp: 58, speed: 17 },
            { temp: 59, speed: 17 },
            { temp: 60, speed: 17 },
            { temp: 61, speed: 22 },
            { temp: 62, speed: 22 },
            { temp: 63, speed: 22 },
            { temp: 64, speed: 23 },
            { temp: 65, speed: 24 },
            { temp: 66, speed: 25 },
            { temp: 67, speed: 25 },
            { temp: 68, speed: 28 },
            { temp: 69, speed: 30 },
            { temp: 70, speed: 33 },
            { temp: 71, speed: 37 },
            { temp: 72, speed: 40 },
            { temp: 73, speed: 43 },
            { temp: 74, speed: 44 },
            { temp: 75, speed: 46 },
            { temp: 76, speed: 48 },
            { temp: 77, speed: 52 },
            { temp: 78, speed: 52 },
            { temp: 79, speed: 55 },
            { temp: 80, speed: 55 },
            { temp: 81, speed: 60 },
            { temp: 82, speed: 60 },
            { temp: 83, speed: 65 },
            { temp: 84, speed: 65 },
            { temp: 85, speed: 70 },
            { temp: 86, speed: 70 },
            { temp: 87, speed: 80 },
            { temp: 88, speed: 80 },
            { temp: 89, speed: 85 },
            { temp: 90, speed: 85 },
            { temp: 91, speed: 90 },
            { temp: 92, speed: 90 },
            { temp: 93, speed: 95 },
            { temp: 94, speed: 95 },
            { temp: 95, speed: 100 },
            { temp: 96, speed: 100 },
            { temp: 97, speed: 100 },
            { temp: 98, speed: 100 },
            { temp: 99, speed: 100 },
            { temp: 100, speed: 100 }
        ]
    },
    {
        name: 'Balanced',
        table: [
            { temp: 0, speed: 0 },
            { temp: 1, speed: 0 },
            { temp: 2, speed: 0 },
            { temp: 3, speed: 0 },
            { temp: 4, speed: 0 },
            { temp: 5, speed: 0 },
            { temp: 6, speed: 0 },
            { temp: 7, speed: 0 },
            { temp: 8, speed: 0 },
            { temp: 9, speed: 0 },
            { temp: 10, speed: 0 },
            { temp: 11, speed: 0 },
            { temp: 12, speed: 0 },
            { temp: 13, speed: 0 },
            { temp: 14, speed: 0 },
            { temp: 15, speed: 0 },
            { temp: 16, speed: 0 },
            { temp: 17, speed: 0 },
            { temp: 18, speed: 0 },
            { temp: 19, speed: 0 },
            { temp: 20, speed: 0 },
            { temp: 21, speed: 0 },
            { temp: 22, speed: 0 },
            { temp: 23, speed: 0 },
            { temp: 24, speed: 0 },
            { temp: 25, speed: 0 },
            { temp: 26, speed: 0 },
            { temp: 27, speed: 0 },
            { temp: 28, speed: 0 },
            { temp: 29, speed: 0 },
            { temp: 30, speed: 0 },
            { temp: 31, speed: 0 },
            { temp: 32, speed: 0 },
            { temp: 33, speed: 0 },
            { temp: 34, speed: 0 },
            { temp: 35, speed: 0 },
            { temp: 36, speed: 0 },
            { temp: 37, speed: 0 },
            { temp: 38, speed: 0 },
            { temp: 39, speed: 0 },
            { temp: 40, speed: 0 },
            { temp: 41, speed: 0 },
            { temp: 42, speed: 0 },
            { temp: 43, speed: 0 },
            { temp: 44, speed: 0 },
            { temp: 45, speed: 0 },
            { temp: 46, speed: 10 },
            { temp: 47, speed: 12 },
            { temp: 48, speed: 16 },
            { temp: 49, speed: 19 },
            { temp: 50, speed: 19 },
            { temp: 51, speed: 19 },
            { temp: 52, speed: 23 },
            { temp: 53, speed: 23 },
            { temp: 54, speed: 26 },
            { temp: 55, speed: 26 },
            { temp: 56, speed: 26 },
            { temp: 57, speed: 30 },
            { temp: 58, speed: 30 },
            { temp: 59, speed: 30 },
            { temp: 60, speed: 33 },
            { temp: 61, speed: 33 },
            { temp: 62, speed: 33 },
            { temp: 63, speed: 35 },
            { temp: 64, speed: 35 },
            { temp: 65, speed: 38 },
            { temp: 66, speed: 40 },
            { temp: 67, speed: 42 },
            { temp: 68, speed: 45 },
            { temp: 69, speed: 47 },
            { temp: 70, speed: 50 },
            { temp: 71, speed: 50 },
            { temp: 72, speed: 52 },
            { temp: 73, speed: 53 },
            { temp: 74, speed: 53 },
            { temp: 75, speed: 57 },
            { temp: 76, speed: 57 },
            { temp: 77, speed: 60 },
            { temp: 78, speed: 60 },
            { temp: 79, speed: 63 },
            { temp: 80, speed: 65 },
            { temp: 81, speed: 65 },
            { temp: 82, speed: 70 },
            { temp: 83, speed: 70 },
            { temp: 84, speed: 75 },
            { temp: 85, speed: 75 },
            { temp: 86, speed: 80 },
            { temp: 87, speed: 80 },
            { temp: 88, speed: 85 },
            { temp: 89, speed: 90 },
            { temp: 90, speed: 90 },
            { temp: 91, speed: 90 },
            { temp: 92, speed: 95 },
            { temp: 93, speed: 95 },
            { temp: 94, speed: 95 },
            { temp: 95, speed: 100 },
            { temp: 96, speed: 100 },
            { temp: 97, speed: 100 },
            { temp: 98, speed: 100 },
            { temp: 99, speed: 100 },
            { temp: 100, speed: 100 }
        ]
    },
    {
        name: 'Cool',
        table: [
            { temp: 0, speed: 0 },
            { temp: 1, speed: 0 },
            { temp: 2, speed: 0 },
            { temp: 3, speed: 0 },
            { temp: 4, speed: 0 },
            { temp: 5, speed: 0 },
            { temp: 6, speed: 0 },
            { temp: 7, speed: 0 },
            { temp: 8, speed: 0 },
            { temp: 9, speed: 0 },
            { temp: 10, speed: 0 },
            { temp: 11, speed: 0 },
            { temp: 12, speed: 0 },
            { temp: 13, speed: 0 },
            { temp: 14, speed: 0 },
            { temp: 15, speed: 0 },
            { temp: 16, speed: 0 },
            { temp: 17, speed: 0 },
            { temp: 18, speed: 0 },
            { temp: 19, speed: 0 },
            { temp: 20, speed: 0 },
            { temp: 21, speed: 0 },
            { temp: 22, speed: 0 },
            { temp: 23, speed: 0 },
            { temp: 24, speed: 0 },
            { temp: 25, speed: 0 },
            { temp: 26, speed: 0 },
            { temp: 27, speed: 0 },
            { temp: 28, speed: 0 },
            { temp: 29, speed: 0 },
            { temp: 30, speed: 0 },
            { temp: 31, speed: 0 },
            { temp: 32, speed: 0 },
            { temp: 33, speed: 0 },
            { temp: 34, speed: 0 },
            { temp: 35, speed: 0 },
            { temp: 36, speed: 0 },
            { temp: 37, speed: 0 },
            { temp: 38, speed: 0 },
            { temp: 39, speed: 0 },
            { temp: 40, speed: 0 },
            { temp: 41, speed: 0 },
            { temp: 42, speed: 0 },
            { temp: 43, speed: 0 },
            { temp: 44, speed: 0 },
            { temp: 45, speed: 15 },
            { temp: 46, speed: 15 },
            { temp: 47, speed: 15 },
            { temp: 48, speed: 20 },
            { temp: 49, speed: 20 },
            { temp: 50, speed: 20 },
            { temp: 51, speed: 25 },
            { temp: 52, speed: 25 },
            { temp: 53, speed: 25 },
            { temp: 54, speed: 27 },
            { temp: 55, speed: 27 },
            { temp: 56, speed: 30 },
            { temp: 57, speed: 30 },
            { temp: 58, speed: 32 },
            { temp: 59, speed: 33 },
            { temp: 60, speed: 35 },
            { temp: 61, speed: 37 },
            { temp: 62, speed: 40 },
            { temp: 63, speed: 40 },
            { temp: 64, speed: 42 },
            { temp: 65, speed: 45 },
            { temp: 66, speed: 45 },
            { temp: 67, speed: 45 },
            { temp: 68, speed: 47 },
            { temp: 69, speed: 50 },
            { temp: 70, speed: 50 },
            { temp: 71, speed: 52 },
            { temp: 72, speed: 55 },
            { temp: 73, speed: 55 },
            { temp: 74, speed: 57 },
            { temp: 75, speed: 60 },
            { temp: 76, speed: 60 },
            { temp: 77, speed: 65 },
            { temp: 78, speed: 65 },
            { temp: 79, speed: 70 },
            { temp: 80, speed: 70 },
            { temp: 81, speed: 75 },
            { temp: 82, speed: 75 },
            { temp: 83, speed: 80 },
            { temp: 84, speed: 80 },
            { temp: 85, speed: 85 },
            { temp: 86, speed: 85 },
            { temp: 87, speed: 90 },
            { temp: 88, speed: 90 },
            { temp: 89, speed: 90 },
            { temp: 90, speed: 95 },
            { temp: 91, speed: 95 },
            { temp: 92, speed: 95 },
            { temp: 93, speed: 95 },
            { temp: 94, speed: 95 },
            { temp: 95, speed: 100 },
            { temp: 96, speed: 100 },
            { temp: 97, speed: 100 },
            { temp: 98, speed: 100 },
            { temp: 99, speed: 100 },
            { temp: 100, speed: 100 }
        ]
    }
];
