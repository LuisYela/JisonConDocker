%lex

%options case-insensitive

%%

"operar"			return 'Roperar';
";"					return 'tpcoma';
"("					return 'tparA';
")"					return 'tparC';
">"					return 'tmayorq';
"<"					return 'tmenorq';

"+"					return 'tmas';
"-"					return 'tmenos';
"*"					return 'tpor';
"/"					return 'tdiv';


/* Espacios en blanco */
[ \r\t]+			{}
\n					{}


[0-9]+"."[0-9]+  	return 'tdecimal';
[0-9]+				return 'tentero';

<<EOF>>				return 'EOF';

.					{ console.error('Este es un error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column); }
/lex



/* Asociación de operadores y precedencia */

%left 'tmas' 'tmenos'
%left 'tpor' 'tdiv'
%left 'tparA' 'tparC'
%left UMENOS

%start inicio

%% /* Definición de la gramática */

inicio
	: instrucciones EOF{return $1;}
;

instrucciones
	: instruccion instrucciones{$$=$1+"\n"+$2;}
	| instruccion {$$=$1;}
	| error { console.error('Este es un error sintactico: ' + yytext + ', en la linea: ' + this._$.first_line + ', en la columna: ' + this._$.first_column);
	$$ = 'Este es un error sintactico: ' + yytext + ', en la linea: ' + this._$.first_line + ', en la columna: ' + this._$.first_column; 
	}
;

instruccion
	: Roperar tmenorq expresion tmayorq tpcoma {
		console.log('El valor de la expresion es: ' + $3);
		$$='El valor de la expresion es: ' + $3;
	}
;

expresion
	: tmenos expresion %prec UMENOS	{ $$ = $2 *-1; }
	| expresion tmas expresion		{ $$ = $1 + $3; }
	| expresion tmenos expresion		{ $$ = $1 - $3; }
	| expresion tpor expresion		{ $$ = $1 * $3; }
	| expresion tdiv expresion	{ $$ = $1 / $3; }
	| tentero						{ $$ = Number($1); }
	| tdecimal						{ $$ = Number($1); }
	| tparA expresion tparC		{ $$ = $2; }
;