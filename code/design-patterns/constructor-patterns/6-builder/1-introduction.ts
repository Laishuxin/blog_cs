export {}

abstract class AbstractHouse {
  public abstract buildBasic(): void;
  public abstract buildWall(): void;
  public abstract buildRoof(): void;
  public build(): void {
    this.buildBasic();
    this.buildWall();
    this.buildRoof();
    console.log('done');
  }
}

class CommonHouse extends AbstractHouse {
  public buildBasic(): void {
    console.log(`build basic of CommonHouse`);
  }
  public buildWall(): void {
    console.log(`build wall of CommonHouse`);
  }
  public buildRoof(): void {
    console.log(`build roof of CommonHouse`);
  }
}

class Villa extends AbstractHouse {
  public buildBasic(): void {
    console.log(`build basic of Villa`);
  }
  public buildWall(): void {
    console.log(`build wall of Villa`);
  }
  public buildRoof(): void {
    console.log(`build roof of Villa`);
  }
}

function main() {
  const house: AbstractHouse = new Villa();
  house.buildBasic();
  house.buildWall();
  house.buildRoof();
  house.build();
}

main();
