console.log("====REST PARAMETERS====");
let print = (a, b, ...rest) => {
    console.log(a, b, rest);
};

print();
print(1);
print(1, 2);
print(1, 2, 3);
print(1, 2, 3, 4);
