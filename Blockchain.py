# Blockchain from scratch

#first we make block
Class Block:
    def  __init__  (self,  index, transaction,proof,previous_hash):
        self.index = index
        self.transactions = transactions
        self.proof = proof
        self.previous_hash = previous_hash 

