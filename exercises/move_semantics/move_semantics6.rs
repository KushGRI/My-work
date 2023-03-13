// move_semantics6.rs
// Execute `rustlings hint move_semantics6` or use the `hint` watch subcommand for a hint.
// You can't change anything except adding or removing references.



fn main() {
    let data = "Rust is great!".to_string();

    get_char(&data); //here we are not giving the ownership permamnantely as we are giving the pointer reference only so borrowing is done here  and owner is changed for a some time

   string_uppercase(data); // here we are giving the ownership to the function as we have directly passaed the value here and so we are changing the owner here 
}

// Should not take ownership
fn get_char(data: &String) -> char { 
    data.chars().last().unwrap()
}

//Should take ownership
fn string_uppercase(mut data: String) {
    data = data.to_uppercase();

    println!("{}", data);
}
