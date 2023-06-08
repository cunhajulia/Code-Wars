//DNA to RNA Conversion

//Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.


function DNAtoRNA(dna) {
  return dna.replace(/T/g, 'U');
}

  // create a function which returns an RNA sequence from the given DNA sequence
//using regex to replace instances of one letter (matching DNA) to another (matching RNA), 
//without having to hard code any and every instance of when this would happen (i.e. brute
//force)