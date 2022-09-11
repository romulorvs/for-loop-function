require("./index");

describe("For Loop", () => {
  it("should iterate through the array", () => {
    let sum = 0;
    let arr = [1, 2, 3, 4, 5];
    arr.for(({ curr }) => {
      sum += curr;
    });
    expect(sum).toBe(15);

    sum = 0;
    arr.for(
      ({ curr }) => {
        sum += curr;
      },
      {
        start: 1,
      }
    );
    expect(sum).toBe(14);

    sum = 0;
    arr.for(
      ({ curr }) => {
        sum += curr;
      },
      {
        condition: (i) => i < arr.length - 1,
      }
    );
    expect(sum).toBe(10);

    sum = 0;
    arr.for(
      ({ curr }) => {
        sum += curr;
      },
      {
        iterator: (i) => i + 2,
      }
    );
    expect(sum).toBe(9);

    arr = [1, 2, 3, 4, 5, 6];
    sum = 0;
    arr.for(
      ({ curr }) => {
        sum += curr;
      },
      {
        start: 1,
        condition: (i) => i < arr.length - 1,
        iterator: (i) => i + 2,
      }
    );
    expect(sum).toBe(6);
  });

  it("should continue to next iteration on jump being called", () => {
    let sum = 0;
    const arr = [1, 2, 3, 4, 5];
    arr.for(({ curr, jump }) => {
      if (curr === 4) {
        jump();
      }
      sum += curr;
    });
    expect(sum).toBe(11);
  });

  it("should break loop on stop being called", () => {
    let sum = 0;
    const arr = [1, 2, 3, 4, 5];
    arr.for(({ curr, stop }) => {
      if (curr === 4) {
        stop();
      }
      sum += curr;
    });
    expect(sum).toBe(6);
  });

  it("should throw an error when code does not reach break or continue", () => {
    const arr = [1, 2, 3, 4, 5];
    expect(() => {
      arr.for(() => {
        throw new Error("");
      });
    }).toThrow(Error);
  });

  it("should throw an error when typeError is thrown", () => {
    const arr = [1, 2, 3, 4, 5];
    expect(() => {
      arr.for(15);
    }).toThrow(TypeError);

    expect(() => {
      arr.for(() => {}, null);
    }).toThrow(TypeError);

    expect(() => {
      arr.for(() => {}, []);
    }).toThrow(TypeError);

    expect(() => {
      arr.for(() => {}, {
        start: false,
      });
    }).toThrow(TypeError);

    expect(() => {
      arr.for(() => {}, {
        condition: false,
      });
    }).toThrow(TypeError);

    expect(() => {
      arr.for(() => {}, {
        iterator: false,
      });
    }).toThrow(TypeError);
  });
});
