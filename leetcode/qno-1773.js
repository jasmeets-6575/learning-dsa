var countMatches = function(items, ruleKey, ruleValue) {
    let count;
    if(ruleKey === 'type')  count = 0;
    if(ruleKey === 'color') count = 1;
    if(ruleKey === 'name')  count = 2;
    items.map((item)=>
    {if(item.find(i => i === ruleValue)) count++}
    )
    return count
    
};

console.log(countMatches([["ii","iiiiiii","ii"],["iiiiiii","iiiiiii","ii"],["ii","iiiiiii","iiiiiii"]],
 ruleKey = "color",
  ruleValue = "ii"));