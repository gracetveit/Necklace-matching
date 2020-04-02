def same_necklace (a, b):
    """
    Sees if string a and b are just the same. Then splices through string a to
    see if any combination matches string b. Otherwise it returns false
    """
    if a == b:
        return True
    for i in range (1, len(a)):
        if a[i:] + a[0:i] == b: return True 
        
    return False

def repeats(givenString):
    matches = 1
    for i in range (1, len(givenString)):
        if givenString[i:] + givenString[0:i] == givenString:
            matches += 1
    return matches