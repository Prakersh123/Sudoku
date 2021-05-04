obj=document.querySelectorAll(".a")



//this function is used to set the id of each cell 
function set_id()
{
	let count=11;
for(let add_id of obj)
{
		if(count%10==0)
		{
			count++;
		}
		add_id.id=count;
		count++;
}
} set_id();
// the end of setting id


// this visited array will keep track for 3x3 matrix. it will tell you which number has already present in this 3x3 mat..

let visited = [[0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0,0]]

let board = [[0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0,0]]

let source_cell

buttons=document.querySelectorAll(".butn")


// this will tell that which cell is selected to fill value.
for(let cell of obj)
{
	cell.addEventListener('click',(e)=>{
		source_cell=e.target
		source_cell.classList.add('selected')

		})	
}


//here we will select the number to be filled  in source cell , then update board accordingly.
for(let button of buttons)
{
		button.addEventListener('click',(e)=>{
			console.log(e.target.innerText)
			
			if(e.target.innerText==="SOLVE");
			else{
			if(e.target.innerText==="ERASE"){
        	
        		

        	let x = parseInt(source_cell.id);   //getting the cell id to be erased
			let i=Math.floor(x/10)-1;       //from that cell id extracting the row value
			let j=(x%10)-1;					//from that cell id extracting the col value
			source_cell.innerText=""
			// check[i][j]=0;
			board[i][j]=0;		
			let index_visi= Math.floor(i/3)*3+Math.floor(j/3);

                    visited[index_visi][board[i][j]]=0;
                    	source_cell.classList.remove("selected")
			
			}
			else
			{	

					source_cell.innerText=e.target.innerText
						let x = parseInt(source_cell.id);
					let i=Math.floor(x/10)-1;
					let j=(x%10)-1;

					// source_cell.innerText=""
					// check[i][j]=parseInt(e.target.innerText);
					board[i][j]=parseInt(source_cell.innerText);
					let index_visi= Math.floor(i/3)*3+Math.floor(j/3);

                    visited[index_visi][board[i][j]]=1;


			}
		}})
}


function row_confirm( x, i, j)
{
    for(let q=0;q<9;q++)
    {
        if(x===board[i][q])    
        {
            return false;
        }
    }
    for(let q=0;q<9;q++)
    {
        if(x===board[q][j])
        return false;
    }
    return true;
}
function solve( n, j, N)
{
           if(j>=N)
           {
               j=j%9;
               n++;
           } 
           if(n===N)
           {
               return true;
           }
           
           
           
          if(board[n][j]===0) {
                    let index_visit=Math.floor(n/3)*3+Math.floor(j/3);

                for(let x=1;x<=9;x++)
                {
                    if(visited[index_visit][x]==0)
                    {
                        if(row_confirm(x,n,j)==true)
                        {
                               board[n][j]=x;
                               visited[index_visit][x]=true; 

                               if(solve(n,j+1,N))
                               {
                                   return true;
                               }
                               else
                               {
                               board[n][j]=0;
                               visited[index_visit][x]=false; 
                               }
                        }
                            
                    }
                }
                return false;

            }
            return solve(n,j+1,N);
        
}





ready=document.querySelector("#sol")
 
//main solution started here. 
 ready.addEventListener('click',(e)=>
		 {

		 	          if(  solve(0,0,9)==0)
		 	          {
		 	          	alert("can't solve ")
		 	          }
		 	          else
		 	          {
		 	          	for(let update of obj)
		 	          	{
		 	          		// let get = update.id;
		 	          		let x = parseInt(update.id);
							let i=Math.floor(x/10)-1;
							let j=(x%10)-1;
							if(update.classList.length!==3){
		 	          		update.innerText=board[i][j]
		 	          			update.classList.add("change");
		 	          	}
		 	          	}
		 	          }





 			}
 )





