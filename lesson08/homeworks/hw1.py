def create_files(n):
    for i in range(n):
        filename = f"file {i}.txt"
        with open(filename, 'w') as f:
            f.write(f"hello from file {i}")

create_files(2)