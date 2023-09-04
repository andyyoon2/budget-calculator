def round_num(n):
    return round(n, 2)

print("Total spending in shared categories:")
total_spending = round_num(float(input()))

# TODO: Option to adjust from JK or to JK (usually will be from JK)
print("Refunds to different accounts:")
refunds = round_num(float(input()))

print("Total from 재민 accounts:")
total_jaemin_accounts = round_num(float(input()))

print("Total from 인수 accounts:")
total_insoo_accounts = round_num(float(input()))

print("Total from SoFi accounts:")
total_sofi_accounts = round_num(float(input()))

jaemin_paid = round_num(total_jaemin_accounts + refunds)
insoo_paid = round_num(total_insoo_accounts - refunds)
half_split = round_num((total_spending - total_sofi_accounts - refunds) / 2)

print(f"Total shared that 재민 paid: ${jaemin_paid}")
print(f"Total shared that 인수 paid: ${insoo_paid}")
print(f"50/50 split is ${half_split}")

if half_split != jaemin_paid:
    if jaemin_paid > insoo_paid:
        print(f"So 인수 owes 재민 ${round_num(half_split - insoo_paid)}")
    else:
        print(f"So 재민 owes 인수 ${round_num(half_split - jaemin_paid)}")

"""
jaemin_personal = round_num(total_jaemin_accounts - half_split)
insoo_personal = round_num(total_insoo_accounts - half_split)

print(f"재민 personal expenses: ${jaemin_personal}")
print(f"인수 personal expenses: ${insoo_personal}")
"""

difference = round_num(total_spending - jaemin_paid - insoo_paid - total_sofi_accounts)
if difference == 0:
    print("Everything added up!")
else:
    print(f"Something isn't right. ${difference} is unaccounted for.")
