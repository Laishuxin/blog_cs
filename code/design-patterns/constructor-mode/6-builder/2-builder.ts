export {}

class House {
  public basic: string | undefined;
  public wall: string | undefined;
  public roof: string | undefined;
  toString() {
    return `basic: ${this.basic}, wall: ${this.wall}, roof: ${this. roof}`;
  }
}

abstract class HouseBuilder {
  protected house: House = new House();
  public abstract buildBasic(): void;
  public abstract buildWall(): void;
  public abstract buildRoof(): void;
  
  public getHouse(): House {
    return this.house;
  }
}

class CommonHouseBuilder extends HouseBuilder {
  public buildBasic(): void {
    this.house.basic = 'common house basic';
    console.log('Building basic of common house');
  }
  public buildWall(): void {
    this.house.wall = 'common house wall';
    console.log('Building wall of common house');
  }
  public buildRoof(): void {
    this.house.roof = 'common house roof';
    console.log('Building roof of common house');
  }
}

class VillaHouseBuilder extends HouseBuilder {
  public buildBasic(): void {
    this.house.basic = 'villa house basic';
    console.log('Building basic of villa house');
  }
  public buildWall(): void {
    this.house.wall = 'villa house wall';
    console.log('Building wall of villa house');
  }
  public buildRoof(): void {
    this.house.roof = 'villa house roof';
    console.log('Building roof of villa house');
  }
}

class Director {
  private houseBuilder: HouseBuilder | null = null;
  
  public setHouseBuilder(houseBuilder: HouseBuilder) {
    this.houseBuilder = houseBuilder;
  }
  
  public getHouserBuilder(): HouseBuilder | null {
    return this.houseBuilder;
  }

  public construct(): House {
    if (this.houseBuilder === null) throw new Error("HouseBuilder is missing");
    this.houseBuilder.buildBasic();
    this.houseBuilder.buildWall();
    this.houseBuilder.buildRoof();
    return this.houseBuilder.getHouse();
  }
}

function main() {
  const director = new Director();
  director.setHouseBuilder(new CommonHouseBuilder());
  let house = director.construct();
  console.log(`building common house: `, house.toString());

  director.setHouseBuilder(new VillaHouseBuilder());
  house = director.construct();
  console.log(`building villa house: `, house.toString());
}

main();
