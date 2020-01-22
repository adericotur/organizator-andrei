export abstract class Mocker {
  private static mockFirstNames: string[] = ['Adela', 'Ana', 'Alina', 'Doina', 'Dora', 'Rebeca', 'Roxana', 'Sabina', 'Andrei', 'Adrian', 'Teodor', 'Alin', 'Cornel'];
  private static mockLastNames: string[] = ['Popescu', 'Ionescu', 'Nita', 'Dumitrescu', 'Dima', 'Dobre', 'Tudor', 'Nistor', 'Dinu', 'Voinea', 'Albu', 'Toma', 'Stanescu', 'Sava'];
  private static mockSpecialties: string[] = ['Chirurgie Generala', 'Chirurgie Pediatrica', 'Chirurgie Vasculara', 'Neurochirurgie', 'Oftalmologie', 'Ortopedie Pediatrica'];
  private static phonePrefixes: string[] = ['0785', '0766', '0744', '0782'];

  static firstName(): string {
    return this.mockFirstNames[Math.floor(Math.random() * this.mockFirstNames.length)];
  }

  static lastName(): string {
    return this.mockLastNames[Math.floor(Math.random() * this.mockLastNames.length)];
  }

  static specialty(): string {
    return this.mockSpecialties[Math.floor(Math.random() * this.mockSpecialties.length)];
  }

  static phoneNo(): string {
    let result = this.phonePrefixes[Math.floor(Math.random() * this.phonePrefixes.length)];
    for (let i = 0; i < 6; i++) {
      result += Math.floor(Math.random() * 10);
    }
    return result;
  }
}
