import { LightningElement } from 'lwc';

export default class QuizAppLwc extends LightningElement {
    selected = {};
    correctAnswers=0;
    isSubmitted=false;
    myQuestions = [
        {
            id: 1,
            question: "Which of the following is not a template Loop?",
            choices: {
                a: "for:each",
                b: "iterator",
                c: "for:index",
                d: "None"
            },
            correctAnswer: "c"
        },
        {
            id: 2,
            question: "Which directive is used for conditional rendering in LWC?",
            choices: {
                a: "if:true",
                b: "if:visible",
                c: "if:show",
                d: "if:render"
            },
            correctAnswer: "a"
        },
        {
            id: 3,
            question: "Which method is used to dispatch a custom event in LWC?",
            choices: {
                a: "dispatchCustomEvent",
                b: "sendEvent",
                c: "fireEvent",
                d: "dispatchEvent"
            },
            correctAnswer: "d"
        }
    ];
    changeHandler(event) {
        console.log("name",event.target.name);
        console.log("value",event.target.value);
        const {name, value} = event.target;
        this.selected={...this.selected,[name]:value};

    }
    submitHandler(event) {
        event.preventDefault();
        let correct = this.myQuestions.filter(item=>this.selected[item.id]===item.correctAnswer);
        this.correctAnswers = correct.length;
        this.isSubmitted=true;
        console.log("this.correctAnswers",this.correctAnswers);
    }
    resetHandler() {
        this.selected={};
        this.correctAnswers=0;
        this.isSubmitted=false;  
    }
    get allNotSelected() {
        return !(Object.keys(this.selected).length === this.myQuestions.length);
    }
    
    get hasScoredFull(){
        return `slds-text-heading_large ${this.myQuestions.length===this.correctAnswers?
        'slds-text-color_success':'slds-text-color_error'}`;
    }

     
                
} 