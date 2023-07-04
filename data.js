 const data = [
'// TEXT (1/100 mm)',
'SOH AM[10]6364;3547;0;1;0;2;1;1;13ERT',
'SOH BM[10]A1745400015:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[11]6564;3547;0;1;0;2;1;1;13ERT',
'SOH BM[11]A1745400203:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[12]6814;3547;0;1;0;2;1;1;13ERT',
'SOH BM[12]A1745400215:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[13]7064;3547;0;1;0;2;1;1;13ERT',
'SOH BM[13]A1745400220:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[14]7364;3547;0;1;0;2;1;1;13ERT',
'SOH BM[14]A1745400403:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[15]7664;3547;0;1;0;2;1;1;13ERT',
'SOH BM[15]A1745400420:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[16]7914;3547;0;1;0;2;1;1;13ERT',
'SOH BM[16]A1745400603:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[17]8164;3547;0;1;0;2;1;1;13ERT',
'SOH BM[17]A1745400420:E002ERT',
'// TEXT (1/100 mm)',
'SOH AM[18]8414;3547;0;1;0;2;1;1;13ERT',
'SOH BM[18]A1745400603:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[19]8664;3547;0;1;0;2;1;1;13ERT',
'SOH BM[19]A1745400620:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[20]8914;3547;0;1;0;2;1;1;13ERT',
'SOH BM[20]A1745400621:E002ERT',
'// TEXT (1/100 mm)',
'SOH AM[21]9164;3547;0;1;0;2;1;1;13ERT',
'SOH BM[21]A1745400805:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[22]9414;3547;0;1;0;2;1;1;13ERT',
'SOH BM[22]A1745400817:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[23]9664;3547;0;1;0;2;1;1;13ERT',
'SOH BM[23]A1745400904:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[24]9914;3547;0;1;0;2;1;1;13ERT',
'SOH BM[24]A1745400904:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[25]10164;3547;0;1;0;2;1;1;13ERT',
'SOH BM[25]A1745400906:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[26]10414;3547;0;1;0;2;1;1;13ERT',
'SOH BM[26]A1745400915:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[27]10664;3547;0;1;0;2;1;1;13ERT',
'SOH BM[27]A1745401017:E002ERT',
'// TEXT (1/100 mm)',
'SOH AM[28]10914;3547;0;1;0;2;1;1;13ERT',
'SOH BM[28]A1745401021:E002ERT',
'// TEXT (1/100 mm)',
'SOH AM[29]11164;3547;0;1;0;2;1;1;13ERT',
'SOH BM[29]A1745401107:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[30]11414;3547;0;1;0;2;1;1;13ERT',
'SOH BM[30]A1745401205:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[31]11664;3547;0;1;0;2;1;1;13ERT',
'SOH BM[31]A1745401322:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[32]11914;3547;0;1;0;2;1;1;13ERT',
'SOH BM[32]A1745401420:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[33]12164;3547;0;1;0;2;1;1;13ERT',
'SOH BM[33]A1745401421:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[34]12414;3547;0;1;0;2;1;1;13ERT',
'SOH BM[34]A1745401510:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[35]12664;3547;0;1;0;2;1;1;13ERT',
'SOH BM[35]A1745401512:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[36]12914;3547;0;1;0;2;1;1;13ERT',
'SOH BM[36]A1745401517:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[37]13164;3547;0;1;0;2;1;1;13ERT',
'SOH BM[37]A1745401522:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[38]13414;3547;0;1;0;2;1;1;13ERT',
'SOH BM[38]A1745401617:E002ERT',
'// TEXT (1/100 mm)',
'SOH AM[39]13664;3547;0;1;0;2;1;1;13ERT',
'SOH BM[39]A1745401722:E002ERT',
'// TEXT (1/100 mm)',
'SOH AM[40]13914;3547;0;1;0;2;1;1;13ERT',
'SOH BM[40]A1745401817:E002ERT',
'// TEXT (1/100 mm)',
'SOH AM[41]14164;3547;0;1;0;2;1;1;13ERT',
'SOH BM[41]A1745401821:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[42]14414;3547;0;1;0;2;1;1;13ERT',
'SOH BM[42]A1745401904:E002ERT',
'// TEXT (1/100 mm)',
'SOH AM[43]14664;3547;0;1;0;2;1;1;13ERT',
'SOH BM[43]A1745402003:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[44]14914;3547;0;1;0;2;1;1;13ERT',
'SOH BM[44]A1745402013:E002ERT',
'// TEXT (1/100 mm)',
'SOH AM[45]15164;3547;0;1;0;2;1;1;13ERT',
'SOH BM[45]A1745402017:E002ERT',
'// TEXT (1/100 mm)',
'SOH AM[46]15414;3547;0;1;0;2;1;1;13ERT',
'SOH BM[46]A1745402104:E002ERT',
'// TEXT (1/100 mm)',
'SOH AM[47]15664;3547;0;1;0;2;1;1;13ERT',
'SOH BM[47]A1745402122:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[48]15914;3547;0;1;0;2;1;1;13ERT',
'SOH BM[48]A1745402213:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[49]16164;3547;0;1;0;2;1;1;13ERT',
'SOH BM[49]A1745402217:E002ERT',
'// TEXT (1/100 mm)',
'SOH AM[50]16414;3547;0;1;0;2;1;1;13ERT',
'SOH BM[50]A1745402302:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[51]16664;3547;0;1;0;2;1;1;13ERT',
'SOH BM[51]A1745402310:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[52]16914;3547;0;1;0;2;1;1;13ERT',
'SOH BM[52]A1745402413:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[53]17164;3547;0;1;0;2;1;1;13ERT',
'SOH BM[53]A1745402417:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[54]17414;3547;0;1;0;2;1;1;13ERT',
'SOH BM[54]A1745402421:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[55]17664;3547;0;1;0;2;1;1;13ERT',
'SOH BM[55]A1745402502:E002ERT',
'// TEXT (1/100 mm)',
'SOH AM[56]17914;3547;0;1;0;2;1;1;13ERT',
'SOH BM[56]A1745402520:E002ERT',
'// TEXT (1/100 mm)',
'SOH AM[57]18164;3547;0;1;0;2;1;1;13ERT',
'SOH BM[57]A1745402613:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[58]18414;3547;0;1;0;2;1;1;13ERT',
'SOH BM[58]A1745402710:E002ERT',
'// TEXT (1/100 mm)',
'SOH AM[59]18664;3547;0;1;0;2;1;1;13ERT',
'SOH BM[59]A1745402904:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[60]18914;3547;0;1;0;2;1;1;13ERT',
'SOH BM[60]A1745402915:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[61]19164;3547;0;1;0;2;1;1;13ERT',
'SOH BM[61]A1745402917:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[62]19424;3547;0;1;0;2;1;1;13ERT',
'SOH BM[62]A1745402920:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[63]19664;3547;0;1;0;2;1;1;13ERT',
'SOH BM[63]A1745403110:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[64]19914;3547;0;1;0;2;1;1;13ERT',
'SOH BM[64]A1745403216:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[65]20164;3547;0;1;0;2;1;1;13ERT',
'SOH BM[65]A1745403221:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[66]20414;3547;0;1;0;2;1;1;13ERT',
'SOH BM[66]A1745403421:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[67]20664;3547;0;1;0;2;1;1;13ERT',
'SOH BM[67]A1745403621:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[68]20914;3547;0;1;0;2;1;1;13ERT',
'SOH BM[68]A1745403719:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[69]21164;3547;0;1;0;2;1;1;13ERT',
'SOH BM[69]A1745403821:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[70]21414;3547;0;1;0;2;1;1;13ERT',
'SOH BM[70]A1745403920:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[71]21664;3547;0;1;0;2;1;1;13ERT',
'SOH BM[71]A1745404114:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[72]21914;3547;0;1;0;2;1;1;13ERT',
'SOH BM[72]A1745404119:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[73]22164;3547;0;1;0;2;1;1;13ERT',
'SOH BM[73]A1745404120:E002ERT',
'// TEXT (1/100 mm)',
'SOH AM[74]22414;3547;0;1;0;2;1;1;13ERT',
'SOH BM[74]A1745404121:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[75]22664;3547;0;1;0;2;1;1;13ERT',
'SOH BM[75]A1745404218:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[76]22914;3547;0;1;0;2;1;1;13ERT',
'SOH BM[76]A1745404321:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[77]23164;3547;0;1;0;2;1;1;13ERT',
'SOH BM[77]A1745404420:E002ERT',
'// TEXT (1/100 mm)',
'SOH AM[78]23414;3547;0;1;0;2;1;1;13ERT',
'SOH BM[78]A1745404702:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[79]23664;3547;0;1;0;2;1;1;13ERT',
'SOH BM[79]A1745404718:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[80]23914;3547;0;1;0;2;1;1;13ERT',
'SOH BM[80]A1745404721:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[81]24164;3547;0;1;0;2;1;1;13ERT',
'SOH BM[81]A1745404918:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[82]24414;3547;0;1;0;2;1;1;13ERT',
'SOH BM[82]A1745405020:E002ERT',
'// TEXT (1/100 mm)',
'SOH AM[83]24664;3547;0;1;0;2;1;1;13ERT',
'SOH BM[83]A1745405118:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[84]24914;3547;0;1;0;2;1;1;13ERT',
'SOH BM[84]A1745405121:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[85]25164;3547;0;1;0;2;1;1;13ERT',
'SOH BM[85]A1745405218:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[86]25414;3547;0;1;0;2;1;1;13ERT',
'SOH BM[86]A1745405220:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[87]25664;3547;0;1;0;2;1;1;13ERT',
'SOH BM[87]A1745405319:E002ERT',
'// TEXT (1/100 mm)',
'SOH AM[88]25914;3547;0;1;0;2;1;1;13ERT',
'SOH BM[88]A1745405402:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[89]26164;3547;0;1;0;2;1;1;13ERT',
'SOH BM[89]A1745405418:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[90]26414;3547;0;1;0;2;1;1;13ERT',
'SOH BM[90]A1745405519:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[91]26664;3547;0;1;0;2;1;1;13ERT',
'SOH BM[91]A1745405521:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[92]26914;3547;0;1;0;2;1;1;13ERT',
'SOH BM[92]A1745405618:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[93]27164;3547;0;1;0;2;1;1;13ERT',
'SOH BM[93]A1745405900:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[94]27414;3547;0;1;0;2;1;1;13ERT',
'SOH BM[94]A1745406003:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[95]27664;3547;0;1;0;2;1;1;13ERT',
'SOH BM[95]A1745406018:E002ERT',
'// TEXT (1/100 mm)',
'SOH AM[96]27914;3547;0;1;0;2;1;1;13ERT',
'SOH BM[96]A1745406203:E001ERT',
'// TEXT (1/100 mm)',
'SOH AM[97]28164;3547;0;1;0;2;1;1;13ERT',
'SOH BM[97]A1745406218:E002ERT'];
// BARCODE (1/100 mm)

window.addEventListener('load', labelsMMA);

function labelsMMA(){

    let inputFieldAreaNumberA = document.getElementById("A-number");
    let inputFieldNumber = document.getElementById("label-numbers");
    let resultBoxField = document.getElementById("result-box");

    let btnGenerate = document.getElementById("btn-generate");
    let btnReset = document.getElementById("btn-reset");


    btnGenerate.addEventListener("click", function addGenerate(e) {

        let inputNumberA = inputFieldAreaNumberA.value;  // 'A1745406018';
        inputNumberA = inputNumberA.split("\n"); // array of A numbers
        let inputNumberChar =  inputFieldNumber.value; //'1'
        inputNumberChar = inputNumberChar.split("\n"); // array of numbers
    
    
        let printBufferArray = [];

        if(inputNumberA === "" || inputNumberChar === ""){
            return
        }


        let index1 = 0;

        for (let index = 0; index < data.length; index += 3) {
            let text1_100 = data[index];  // TEXT (1/100 mm)
            let text2_Coordinates = data[index+1];  // SOH AM[10]6364;3547;0;1;0;2;1;1;13ERT
            let text3_A_numberPure = data[index+2]; // SOH BM[10]A1745400015:E001ERT

            //cut the string
            let splitPart1 = text3_A_numberPure.substring(0, 10);
            let splitPart2 = text3_A_numberPure.substring(21, 25);
            let splitPart3 = text3_A_numberPure.substring(26, 29);

            //SOH BM[10] + A1745400015 + :E00 + 1 + ERT
            let editTextNumbers = splitPart1 + inputNumberA[index1] + splitPart2 + inputNumberChar[index1] + splitPart3;

            printBufferArray.push(text1_100);
            printBufferArray.push(text2_Coordinates);
            printBufferArray.push(editTextNumbers);

            // console.log(text1_100);
            // console.log(text2_Coordinates);
            // console.log(editTextNumbers);
            index1++;
            //debugger
        }
//https://stackoverflow.com/questions/38528384/how-to-setup-visual-studio-code-to-detect-and-set-the-correct-encoding-on-file-o
//! Enter 'autoGuessEncoding' and make sure checkbox is checked
        resultBoxField.value = printBufferArray.join("\n");

    });




    // empty all boxes
    btnReset.addEventListener('click', function duReset(e){
        inputFieldAreaNumberA.value = "";
        inputFieldNumber.value = "";
        document.getElementById("result-box").value = "";
    });

}