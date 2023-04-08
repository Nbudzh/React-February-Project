export function CommentItem(
    
        comment
    
){
   const username=comment.author.email.split(`@`)[0]
    // const username = comment.author.email.split(`@`)[0]
    return(
        <div className="card mb-4">
                                <div className="card-body">
                                    <p>{comment.comment}</p>

                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex flex-row align-items-center">
                                            
                                            <p className="small mb-0 ms-2">{username}</p>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
    )
}